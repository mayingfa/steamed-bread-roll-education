package top.qiudb.util.tools;

import com.alibaba.fastjson.JSONObject;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;
import java.util.Map;

public class IpToAddressUtil {
    //使用腾讯的接口通过ip拿到城市信息
    private static final String KEY = "64BBZ-RG4KX-34C4K-7JM76-5YVCK-YFBMF";
    public static String getCityInfo(String ip)  {
        String s = sendGet(ip, KEY);
        Map map = JSONObject.parseObject(s, Map.class);
        String message = (String) map.get("message");
        if("query ok".equals(message)){
            Map result = (Map) map.get("result");
            Map addressInfo = (Map) result.get("ad_info");
            String nation = (String) addressInfo.get("nation");
            String province = (String) addressInfo.get("province");
            //  String district = (String) addressInfo.get("district");
            String city = (String) addressInfo.get("city");
            return nation + "-" + province + "-" + city;
        }else{
            return message;
        }
    }
    //根据在腾讯位置服务上申请的key进行请求操作
    public static String sendGet(String ip, String key) {
        StringBuilder result = new StringBuilder();
        BufferedReader in = null;
        try {
            String urlNameString = "https://apis.map.qq.com/ws/location/v1/ip?ip="+ip+"&key="+key;
            URL realUrl = new URL(urlNameString);
            // 打开和URL之间的连接
            URLConnection connection = realUrl.openConnection();
            // 设置通用的请求属性
            connection.setRequestProperty("accept", "*/*");
            connection.setRequestProperty("connection", "Keep-Alive");
            connection.setRequestProperty("user-agent",
                    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
            // 建立实际的连接
            connection.connect();
            // 获取所有响应头字段
            Map<String, List<String>> map = connection.getHeaderFields();
            // 遍历所有的响应头字段
//            for (Map.Entry entry : map.entrySet()) {
//                System.out.println(key + "--->" + entry);
//            }
            // 定义 BufferedReader输入流来读取URL的响应
            in = new BufferedReader(new InputStreamReader(
                    connection.getInputStream()));
            String line;
            while ((line = in.readLine()) != null) {
                result.append(line);
            }
        } catch (Exception e) {
            System.out.println("发送GET请求出现异常！" + e);
            e.printStackTrace();
        }
        // 使用finally块来关闭输入流
        finally {
            try {
                if (in != null) {
                    in.close();
                }
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
        return result.toString();
    }

}

