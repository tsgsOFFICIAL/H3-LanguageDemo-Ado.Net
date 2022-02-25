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
            DBManager dbManager = new DBManager();
            List<TranslationText> translations = dbManager.GetTranslations();
            
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