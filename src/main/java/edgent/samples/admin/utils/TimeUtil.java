package edgent.samples.admin.utils;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class TimeUtil {

    public static String getLastEightTimeString() {

        Calendar c = Calendar.getInstance();
        if (c.get(Calendar.HOUR_OF_DAY) < 8) {
            c.add(Calendar.DATE, -1);
        }

        return new SimpleDateFormat("yyyy/MM/dd").format(c.getTime()) + " 08:00";

    }

    public static String getNowString() {
        return new SimpleDateFormat("yyyy/MM/dd HH:mm").format(new Date());
    }

    public static void main(String[] args) {
        System.out.println(getLastEightTimeString());
    }

}
