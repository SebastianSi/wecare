package ro.siit.dao;

import java.util.Optional;

public interface BaseDAO {

    Long create(Object entity);

    void update(Object object);

    void delete(Object object);

    <T> Optional<T> findEntity(long id, Class<T> clazz);

    <T> boolean isValid(long id, Class<T> clazz);
}
