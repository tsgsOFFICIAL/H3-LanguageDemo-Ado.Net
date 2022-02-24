using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace H3_LanguageDemo.Models
{
    public class TranslationText
    {
        public int TranslationId { get; private set; }
        public string Danish { get; private set; }
        public string English { get; private set; }
        public string Suomi { get; private set; }
        public string Hungary { get; private set; }
        public TranslationText(int id, string danish, string english, string suomi, string hungary)
        {
            TranslationId = id;
            Danish = danish;
            English = english;
            Suomi = suomi;
            Hungary = hungary;
        }
    }
}