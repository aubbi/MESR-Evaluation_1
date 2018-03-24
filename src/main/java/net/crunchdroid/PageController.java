package net.crunchdroid;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author CrunchDroid
 */
@Controller
public class PageController {


    @GetMapping("/index")
    public String index(){
        return "index";
    }
    @GetMapping("/")
    public String indx(){
        return "index";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }
    @GetMapping("/formulaire")
    public String form(){
        return "formulaire";
    }

    @GetMapping("/register")
    public String register(){
        return "register";
    }

    @GetMapping("/dossier")
    public String dossier(){
        return "dossier";
    }

    @GetMapping("/calendrier")
    public String calendrier(){
        return "calendrier";
    }
    @GetMapping("/contact")
    public String contact(){
        return "contact";
    }
    @GetMapping("/application_approval")
    public String application_approval(){
        return "application_approval";
    }
    @GetMapping("/application_viewer")
    public String application_viewer(){
        return "application_viewer";
    }
    @GetMapping("/home_evaluateur")
    public String home_evaluateur(){
        return "home_evaluateur";
    }
    @GetMapping("/criteria_list")
    public String criteria_list(){
        return "criteria_list";
    }


}


