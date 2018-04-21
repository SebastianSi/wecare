package ro.siit.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import ro.siit.dao.PatientDAO;
import ro.siit.model.Patient;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.util.List;

@Service("patientService")
public class PatientServiceImpl implements PatientService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PatientServiceImpl.class);

    @Resource
    private PatientDAO patientDAO;

    @Override
    @Transactional
    public List<Patient> getPatients() {
        return patientDAO.getPatients();
    }
}
