package edgent.samples.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
// @RequestMapping("/console")
public class ConsoleController {

    @RequestMapping("/console")
    // @ResponseBody
    public String index() {
        return "index";
    }

}
