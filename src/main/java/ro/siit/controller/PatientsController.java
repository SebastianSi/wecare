package ro.siit.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

    @RequestMapping("/patients/{id}")
    @ResponseBody
    public Patient getPatient(@PathVariable("id") final long id) {
        return patientService.getById(id).orElseGet(() -> new Patient());
    }

    @RequestMapping(value = "/patients", method = RequestMethod.POST)
    @ResponseBody
    public Long create(@RequestBody final Patient event) {
        return patientService.createOrUpdate(event).orElse(-1L);
    }

    @RequestMapping(value = "/patients", method = RequestMethod.PUT)
    @ResponseBody
    public Long update(@RequestBody final Patient event) {
        return patientService.createOrUpdate(event).orElse(-1L);
    }

    @RequestMapping(value = "/patients/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void delete(@PathVariable("id") final long id) {
        patientService.delete(id);
    }

    @RequestMapping(value = "/patients/{id}/flag/{value}", method = RequestMethod.PUT)
    @ResponseBody
    public Long setFlag(@PathVariable("id") final long id, @PathVariable("value") final boolean value) {
        return patientService.setFlag(id, value).orElse(-1L);
    }
}
