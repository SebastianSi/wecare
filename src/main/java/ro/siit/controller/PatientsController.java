package ro.siit.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import ro.siit.model.Patient;
import ro.siit.service.PatientService;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class PatientsController extends AbstractController {

    @Resource
    private PatientService patientService;

    @RequestMapping("/patients")
    @ResponseBody
    public List<Patient> getEvents() {
        return patientService.getPatients();
    }
}
