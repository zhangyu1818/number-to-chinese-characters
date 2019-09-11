import N2C from "./index";
const { toChineseCharacters } = N2C;
test("输入 0", () => {
  expect(toChineseCharacters(0)).toBe("零元整");
});

test("输入 10", () => {
  expect(toChineseCharacters(10)).toBe("壹拾元整");
});

test("输入 101", () => {
  expect(toChineseCharacters(101)).toBe("壹佰零壹元整");
});

test("输入 2020", () => {
  expect(toChineseCharacters(2020)).toBe("贰仟零贰拾元整");
});

test("输入 20206", () => {
  expect(toChineseCharacters(20206)).toBe("贰万零贰佰零陆元整");
});

test("输入 101010", () => {
  expect(toChineseCharacters(101010)).toBe("壹拾万零壹仟零壹拾元整");
});

test("输入 20304050", () => {
  expect(toChineseCharacters(20304050)).toBe("贰仟零叁拾万零肆仟零伍拾元整");
});

test("输入 4001001020", () => {
  expect(toChineseCharacters(4001001020)).toBe(
    "肆拾亿零壹佰万零壹仟零贰拾元整"
  );
});

test("输入 10200201.1", () => {
  expect(toChineseCharacters(10200201.1)).toBe("壹仟零贰拾万零贰佰零壹元壹角");
});

test("输入 10200201.11", () => {
  expect(toChineseCharacters(10200201.11)).toBe(
    "壹仟零贰拾万零贰佰零壹元壹角壹分"
  );
});

test("输入 0.01", () => {
  expect(toChineseCharacters(0.01)).toBe("零元零壹分");
});

test("输入 1230523012", () => {
  expect(toChineseCharacters(1230523012)).toBe(
    "壹拾贰亿叁仟零伍拾贰万叁仟零壹拾贰元整"
  );
});
