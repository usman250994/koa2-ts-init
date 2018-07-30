using System;
using LOEApp.Models;

namespace LOEApp
{
    internal class Processor
    {
        internal static LOEResponse Process(LOERequest request)
        {
            var response = new LOEResponse();

            response.BackendHours = ProcessBackend(request.Backend);
            response.FrontendHours = ProcessFrontend(request.Frontend);
            response.MobileHours = ProcessMobile(request.Mobile);
            response.AdditionalHours = ProcessAdditionalFeatures(request.AdditionalFeatures);

            return response;
        }

  
  private static int DefaultMonthlyHours { get { return 160; } }
        private static int DefaultOneWeekHours { get { return 40; } }
        private static int DefaultTwoWeekHours { get { return 80; } }
        private static int SingleInterfaceHours { get { return 16; } }
        private static int BasicAdminPanel { get { return 100; } }
        private static int ComplexityMultiplier { get{ return 115 / 100; } }
        private static int HybridMultiplier { get { return 3 / 2; } }

    }
}