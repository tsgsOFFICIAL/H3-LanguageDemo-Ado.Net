using H3_LanguageDemo.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace H3_LanguageDemo.Controllers
{
    public class DBManager
    {
        string _connectionString;
        List<TranslationText> _translationList;

        public DBManager()
        {
            _connectionString = "Server=localhost\\SQLEXPRESS;Database=LanguageDB;Trusted_Connection=true;";
            _translationList = new List<TranslationText>();
        }

        public List<TranslationText> GetTranslations()
        {
            using (SqlConnection conn = new SqlConnection())
            {
                conn.ConnectionString = _connectionString;
                conn.Open();

                SqlCommand command = new SqlCommand("SELECT * FROM TranslationTable", conn);

                // Create a new SqlDataReader object and read data from the command.
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    //while there is another record present
                    while (reader.Read())
                    {
                        _translationList.Add(new TranslationText((int)reader[0], (string)reader[1], (string)reader[2], (string)reader[3], (string)reader[4]));
                    }
                }
            }
            return _translationList;
        }

        //DBContext = Connection string
    }
}