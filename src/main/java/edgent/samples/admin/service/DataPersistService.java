package edgent.samples.admin.service;

import edgent.samples.admin.dao.DataDao;
import edgent.samples.admin.utils.TimeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class DataPersistService {

    private static Map<String, String> codeMap = new HashMap<>();

    private Map<String, Map<String, Map<String, Float>>> dataPersistMap = new HashMap<>();

    private boolean isLoaded;

    @Autowired
    private DataDao dataDao;

    static {
        codeMap.put("lutaizi", "50103100");
        codeMap.put("runheji", "50102350");
        codeMap.put("zhaopingtai", "50603000");
    }

    public Map<String, Float> getData(String stationName, String property, boolean isNeedReload) {

        if (isNeedReload) {
            dataPersistMap = new HashMap<>();
        }

        readDatabaseIfNull(stationName, property);
        return dataPersistMap.get(stationName).get(property);

    }

    public int addData(String stationName, String property, String time, Float value) {
        try {

            readDatabaseIfNull(stationName, property);
            dataPersistMap.get(stationName).get(property).put(time, value);
            return 0;

        } catch (Exception e) {
            e.printStackTrace();
            return 1;
        }
    }

    private Map<String, Float> queryDataLastDay(String stationCode, String property) {
        return dataDao.listDataBetweenTime(stationCode, property, TimeUtil.getLastEightTimeString(), TimeUtil.getNowString());
    }

    private void readDatabaseIfNull(String stationName, String property) {

        if (dataPersistMap.get(stationName) == null) {
            dataPersistMap.put(stationName, new HashMap<>());
        }

        if (dataPersistMap.get(stationName).get(property) == null) {
            dataPersistMap.get(stationName).put(property, queryDataLastDay(codeMap.get(stationName), property));
        }

    }

}
