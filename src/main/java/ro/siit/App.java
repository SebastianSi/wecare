package ro.siit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"ro.siit"})
public class App {

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
