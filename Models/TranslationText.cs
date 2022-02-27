using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace H3_LanguageDemo.Models
{
    /// <summary>
    /// This class holds the text in all translations available
    /// </summary>
    public class TranslationText
    {
        /// <summary>
        /// TranslationId, the id from the DB
        /// </summary>
        public int TranslationId { get; private set; }
        /// <summary>
        /// Text in danish
        /// </summary>
        public string Danish { get; private set; }
        /// <summary>
        /// Text in english
        /// </summary>
        public string English { get; private set; }
        /// <summary>
        /// Text in suomi
        /// </summary>
        public string Suomi { get; private set; }
        /// <summary>
        /// Text in hungary
        /// </summary>
        public string Hungary { get; private set; }
        /// <summary>
        /// Creates an instance of the TranslationText object
        /// </summary>
        /// <param name="id">The id from the DB</param>
        /// <param name="danish">Danish text</param>
        /// <param name="english">English text</param>
        /// <param name="suomi">Suomi text</param>
        /// <param name="hungary">Hungary text</param>
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