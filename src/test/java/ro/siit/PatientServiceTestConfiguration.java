package ro.siit;

import org.mockito.Mockito;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;
import ro.siit.dao.PatientDAO;
import ro.siit.dao.PatientDAOImpl;

@Profile("test")
@Configuration
public class PatientServiceTestConfiguration {

    @Bean
    @Primary
    public PatientDAO patientDAO() {
        return Mockito.mock(PatientDAOImpl.class);
    }
}
