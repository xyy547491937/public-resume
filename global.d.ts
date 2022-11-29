// global.d.ts
declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}
declare module '*.webp' {
  const webp: string;
  export default webp;
}

// 这里用于扩充window对象上的值
declare interface Window {
  pdk: string;
}