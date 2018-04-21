package ro.siit.dao;

import ro.siit.model.Patient;

import java.util.List;

public interface PatientDAO extends BaseDAO {

    List<Patient> getPatients();
}
