using H3_LanguageDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace H3_LanguageDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            // Create a new instance of the DBManager
            DBManager dbManager = new DBManager();
            List<TranslationText> translations = dbManager.GetTranslations();
            
            // Returns a model of List<TranslationText> to the index view
            return View(translations);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}