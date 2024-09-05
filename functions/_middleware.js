//代理 workers部署服务
export async function onRequestGet(context) {
  return context.env.PROXYWEB.fetch(context.request);
}
