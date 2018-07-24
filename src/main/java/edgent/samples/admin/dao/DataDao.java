package edgent.samples.admin.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Repository
public class DataDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public Map<String, Float> listDataPerDay(String[] hours) {

        Map<String, Float> resultMap = new LinkedHashMap<>();
        StringBuilder sql = new StringBuilder("select * from evaporation_data where time in (");
        for (int i = 0; i < hours.length; i++) {
            sql.append("?");
            if (i != hours.length - 1) {
                sql.append(",");
            }
        }
        sql.append(")");

        List<Map<String, Object>> result = jdbcTemplate.queryForList(sql.toString(), hours);
        for (Map<String, Object> row : result) {
            resultMap.put(row.get("time").toString().substring(11), Float.parseFloat(row.get("evaporation").toString()));
        }

        return resultMap;

    }

}
