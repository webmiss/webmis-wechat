import Env from '../../env'

/* Get请求 */
export default (url:string, data:any={}, success?:any, fail?:any)=>{
  // URL
  if(url.substring(0,4)=='http') url=url;
  else if(url.substring(0,1)=='/') url=Env.baseUrl+url.substring(1);
  else url=Env.apiUrl+url;
  wx.request({
    url: url,
    data: data,
    header: Env.request.headers,
    success: success,
    fail: fail,
  });
}