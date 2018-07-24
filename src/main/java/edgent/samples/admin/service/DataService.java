package edgent.samples.admin.service;

import edgent.samples.admin.dao.DataDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class DataService {

    @Autowired
    private DataDao dataDao;

    public Map<String, Float> getData() {

        return dataDao.listDataPerDay(new String[]{"2018/07/22 0:28 PM", "2018/07/22 0:29 PM", "2018/07/22 0:30 PM", "2018/07/22 0:31 PM"});

    }

}
