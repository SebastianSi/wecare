package ro.siit.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * A class that holds several fields representing the connections and configuration
 * details for properly talking to the database.
 *
 * @author Danut Chindris
 * @since November 5, 2017
 */
@Configuration
@ConfigurationProperties
public class Settings {

    @Value("${db.driver}")
    private String driver;
    @Value("${db.url}")
    private String url;
    @Value("${db.usr}")
    private String usr;
    @Value("${db.password}")
    private String password;
    @Value("${dialect}")
    private String dialect;
    @Value("${sql}")
    private String showSql;
    @Value("${characterEncoding}")
    private String characterEncoding;

    @Value("${images}")
    private String imagesLocation;

    public String getDriver() {
        return driver;
    }

    public void setDriver(String driver) {
        this.driver = driver;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUsr() {
        return usr;
    }

    public void setUsr(String usr) {
        this.usr = usr;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDialect() {
        return dialect;
    }

    public void setDialect(String dialect) {
        this.dialect = dialect;
    }

    public String getShowSql() {
        return showSql;
    }

    public void setShowSql(String showSql) {
        this.showSql = showSql;
    }

    public String getCharacterEncoding() {
        return characterEncoding;
    }

    public void setCharacterEncoding(String characterEncoding) {
        this.characterEncoding = characterEncoding;
    }

    public String getImagesLocation() {
        return imagesLocation;
    }

    public void setImagesLocation(String imagesLocation) {
        this.imagesLocation = imagesLocation;
    }
}
