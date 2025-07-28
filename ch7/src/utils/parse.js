export const parseExpr = (str) => {
  const tokens = str.trim().splits(/\s+/);
  if (tokens.length !== 3) throw new Error("오직 숫자 연산만 가능합니다.");
  const [left, op, right] = tokens;
  return {
    left: Number(left),
    op,
    right: Number(right),
  };
};