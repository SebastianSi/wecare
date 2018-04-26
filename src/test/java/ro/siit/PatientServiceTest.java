package ro.siit;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import ro.siit.dao.PatientDAO;
import ro.siit.model.Patient;
import ro.siit.service.PatientService;

import javax.annotation.Resource;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = App.class)
public class PatientServiceTest {

    @Resource
    private PatientDAO patientDAO;

    @Resource
    private PatientService patientService;

    @Test
    public void whenPatientIdIsProvidedThenRetrievedPatientIsCorrect() {
    }

    @Test
    public void whenGetPatientsIsCalledThenRetrievedPatientsAreCorrect() {
        Mockito.when(patientDAO.getPatients())
                .thenReturn(Arrays.asList(new Patient(Long.valueOf(1L), "1900101123456", "Henri", "Coanda", "Gheorghe Marinescu",
                        "Sp. Judetean Tg. Mures", "Mures", "Tg. Mures", "1 Clinici", 1234567890L, "henri.coanda@email.ro", new Date(),
                        true)));
        final List<Patient> list = patientService.getPatients();
        Assert.assertNotNull("The returned object shouldn't be null", list);
        Assert.assertEquals("List size should be 1", 1, list.size());
    }
}
