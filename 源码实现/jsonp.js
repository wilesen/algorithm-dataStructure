/**
 * JSONP请求工具
 * @param url 请求的地址
 * @param data 请求的参数
 * @returns {Promise<any>}
 */
 const request = ({url, data}) => {
  return new Promise((resolve, reject) => {
    // 处理传参成xx=yy&aa=bb的形式
    const handleData = (data) => {
      const keys = Object.keys(data)
      const keysLen = keys.length
      return keys.reduce((pre, cur, index) => {
        const value = data[cur]
        const flag = index !== keysLen - 1 ? '&' : ''
        return `${pre}${cur}=${value}${flag}`
      }, '')
    }
    // 动态创建script标签
    const script = document.createElement('script')
    // 接口返回的数据获取
    window.jsonpCb = (res) => {
      document.body.removeChild(script)
      delete window.jsonpCb
      resolve(res)
    }
    script.src = `${url}?${handleData(data)}&cb=jsonpCb`
    document.body.appendChild(script)
  })
}
// 使用方式
request({
  url: 'http://localhost:9871/api/jsonp',
  data: {
    // 传参
    msg: 'helloJsonp'
  }
}).then(res => {
  console.log(res)
})



// <script type='text/javascript'>
//       // 后端返回直接执行的方法，相当于执行这个方法，由于后端把返回的数据放在方法的参数里，所以这里能拿到res。
//       window.jsonpCb = function (res) {
//         console.log(res)
//       }
//       </script>
//       <script src='http://localhost:9871/api/jsonp?msg=helloJsonp&cb=jsonpCb' type='text/javascript'></script>

const request=(url,data)=>{
  return new Promise((resolve,reject)=>{
    const handleData=(data)=>{
      const keys=Object.keys(data);
      const keysLen=keys.length;
      return keys.reduce((pre,cur,index)=>{
        const value=data[cur];
        const flag=index!==keysLen-1?'&':'';
        return `${pre}${cur}=${value}${flag}`;
      })
    }
    const script=document.createElement('script');
    window.jsonpCb=(res)=>{
      console.log(res);
    }
    script.scr=`${url}?${handleData(data)}&cb=jsonpCb`
  })
}


