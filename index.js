class N2C {
  static digits = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  static radix = ["", "拾", "佰", "仟"];
  static bigRadix = ["", "万", "亿"];
  static decimalsRadix = ["角", "分"];
  static toChineseCharacters = number => {
    const numberStr = number + "";
    const [integer, decimals = ""] = numberStr.split(".");
    let zeroCount = 0;
    let output = "";
    [...integer].forEach((n, i) => {
      const currentIndex = integer.length - i - 1;
      const quotient = currentIndex / 4;
      const modulus = currentIndex % 4;
      if (n === "0") zeroCount++;
      else {
        if (zeroCount !== 0) output += N2C.digits[0];
        zeroCount = 0;
        output += N2C.digits[+n] + N2C.radix[modulus];
      }
      if (modulus === 0 && zeroCount < 4) {
        output += N2C.bigRadix[quotient];
      }
    });
    if (output === "") output = N2C.digits[0];
    output += "元";
    const decimalsCharacters = [...decimals]
      .map((n, i) =>
        n === "0" ? N2C.digits[0] : N2C.digits[n] + N2C.decimalsRadix[i]
      )
      .join("");
    return output + (decimalsCharacters || "整");
  };
}

export default N2C;
