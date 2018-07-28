package edgent.samples.admin.controller;

import edgent.samples.admin.service.DataPersistService;
import edgent.samples.admin.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/service")
public class ServiceController {

    @Autowired
    private DataService dataService;

    @Autowired
    private DataPersistService dataPersistService;

    @RequestMapping("/dataPerHour")
    public Map<String, Float> getDataPerHour() {

        return dataService.getData();

    }

    @RequestMapping("/dataLastDay")
    public Map<String, Float> getDataLastDay(String stationName, String property, boolean isNeedReload) {

        return dataPersistService.getData(stationName, property, isNeedReload);

    }

    @RequestMapping(value = "/addData", method = RequestMethod.POST)
    public int addData(String stationName, String property, String time, Float value) {
        return dataPersistService.addData(stationName, property, time, value);
    }

}
