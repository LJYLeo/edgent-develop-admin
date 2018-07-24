package edgent.samples.admin.controller;

import edgent.samples.admin.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/service")
public class ServiceController {

    @Autowired
    private DataService dataService;

    @RequestMapping("/dataPerHour")
    public Map<String, Float> getDataPerHour() {

        return dataService.getData();

    }

}
