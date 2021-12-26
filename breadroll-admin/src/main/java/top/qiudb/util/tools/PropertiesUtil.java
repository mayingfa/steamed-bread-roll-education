package top.qiudb.util.tools;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * @author Qiu
 * @email qiudb.top@aliyun.com
 * @date 2021/1/1 10:01
 * @description 读取配置文件信息
 */
public class PropertiesUtil {
    private static final String UPLOAD_URL;
    private static final String ADDRESS;
    static {
        Properties properties=new Properties();
        InputStream inputStream=PropertiesUtil.class.getClassLoader().getResourceAsStream("config.properties");
        try {
            properties.load(inputStream);
        } catch (IOException e) {
            System.out.println("config.properties was not found");
        }
        UPLOAD_URL = System.getProperty("user.dir")+"/upload/";
        ADDRESS = (String) properties.get("address");
    }

    public static String getUploadUrl() {
        return UPLOAD_URL;
    }

    public static String getAddress() {
        return ADDRESS;
    }

}