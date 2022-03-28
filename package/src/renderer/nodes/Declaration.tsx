import type { DrawingContext } from "../DrawingContext";
import { Node } from "../Host";
import type { SkJSIInstance } from "../../skia/JsiInstance";
import type { AnimatedProps } from "../processors/Animations/Animations";
import { isAnimated, materialize } from "../processors/Animations/Animations";
import type { DependencyManager } from "../DependencyManager";

export type DeclarationResult = SkJSIInstance<string> | null;

type DeclarationCallback<T> = (
  props: T,
  children: DeclarationResult[],
  ctx: DrawingContext
) => DeclarationResult;

export const createDeclaration = <T,>(
  cb: DeclarationCallback<T>
): DeclarationCallback<T> => cb;

export interface DeclarationProps<P> {
  onDeclare: DeclarationCallback<P>;
}

export class DeclarationNode<P> extends Node<P> {
  private onDeclare: DeclarationCallback<P>;

  constructor(
    depMgr: DependencyManager,
    onDeclare: DeclarationCallback<P>,
    props: AnimatedProps<P>
  ) {
    super(depMgr, props);
    this.onDeclare = onDeclare;
  }

  set props(props: AnimatedProps<P>) {
    this.memoizable = !isAnimated(props);
    super.props = props;
  }

  get props() {
    return this._props;
  }

  draw(ctx: DrawingContext) {
    const children = this.visit(ctx);
    const props = materialize(this.props);
    const obj = this.onDeclare(props, children, ctx);
    return obj;
  }
}