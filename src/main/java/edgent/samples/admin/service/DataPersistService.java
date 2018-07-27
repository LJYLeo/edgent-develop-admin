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

        if (!isNeedReload) {
            return dataPersistMap.get(stationName).get(property);
        } else {
            Map<String, Float> dataMap = queryDataLastDay(stationName, property);
            dataPersistMap.put(stationName, new HashMap<>());
            dataPersistMap.get(stationName).put(property, dataMap);
            return dataMap;
        }

    }

    private Map<String, Float> queryDataLastDay(String stationName, String property) {
        return dataDao.listDataBetweenTime(stationName, property, TimeUtil.getLastEightTimeString(), TimeUtil.getNowString());
    }

}
