package top.qiudb.util.tools;

import java.util.Random;
/**
 * @author Qiu
 * @email qiudb.top@aliyun.com
 * @date 2021/4/22 8:24
 * @description 常用工具类
 */
public class Tools {
    public static String randomCode() {
        StringBuilder str = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < 6; i++) {
            str.append(random.nextInt(10));
        }
        return str.toString();
    }
}
