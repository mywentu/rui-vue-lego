/**
 * For module import or split code use require
 */

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare interface Date {
  /** 传入形如yyyy-MM-dd格式字符串，输出格式化后的时间 */
  format(string): string;
}