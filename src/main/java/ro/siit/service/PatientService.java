package ro.siit.service;

import ro.siit.model.Patient;

import java.util.List;
import java.util.Optional;

public interface PatientService {

    List<Patient> getPatients();

    Optional<Patient> getById(final long id);

    Optional<Long> createOrUpdate(final Patient event);

    void delete(final long id);

    Optional<Long> setFlag(final long id, final boolean value);
}
