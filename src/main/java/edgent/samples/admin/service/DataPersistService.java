package edgent.samples.admin.service;

import edgent.samples.admin.dao.DataDao;
import edgent.samples.admin.utils.TimeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class DataPersistService {

    private Map<String, Map<String, Map<String, Float>>> dataPersistMap = new HashMap<>();

    private boolean isLoaded;

    @Autowired
    private DataDao dataDao;

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

    private Map<String, Float> queryDataLastDay(String stationName, String property) {
        return dataDao.listDataBetweenTime(stationName, property, TimeUtil.getLastEightTimeString(), TimeUtil.getNowString());
    }

    private void readDatabaseIfNull(String stationName, String property) {

        if (dataPersistMap.get(stationName) == null) {
            dataPersistMap.put(stationName, new HashMap<>());
        }

        if (dataPersistMap.get(stationName).get(property) == null) {
            dataPersistMap.get(stationName).put(property, queryDataLastDay(stationName, property));
        }

    }

}
