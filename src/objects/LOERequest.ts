 import { BasicAdminPanel, ComplexityMultiplier, DefaultMonthlyHours, DefaultOneWeekHours,
     DefaultTwoWeekHours, HybridMultiplier, SingleInterfaceHours} from '../constants';
 import { AdditionalFeaturesI, BackendI, FrontendI, MobileI } from '../interfaces';

 export default class LOERequest {
    public additionalFeatures: number;
    public backend: number;
    public frontend: number;
    public mobile: number;

    constructor(AdditionalFeatures: AdditionalFeaturesI, Backend: BackendI,  Frontend: FrontendI, Mobile: MobileI) {
        this.additionalFeatures = this.ProcessAdditionalFeatures(AdditionalFeatures);
        this.backend = this.ProcessBackend(Backend);
        this.frontend = this.ProcessFrontend(Frontend);
        this.mobile = this.ProcessMobile(Mobile);
    }

    private ProcessBackend(backendRequest: BackendI) {
        if (backendRequest == null) {
            return 0;
        }

        const { RequireConfigurableWorkflow, WorkflowLogicRequired,
             ActiveDirectoryIntegrationRequired, NumberOfInterfaces,
              IsBasicChattingRequired, IsProperChatSolutionRequired,IsComplicated } = backendRequest;

        let totalHours = 0;
        totalHours += RequireConfigurableWorkflow ? DefaultTwoWeekHours : 0;
        totalHours += WorkflowLogicRequired ? DefaultOneWeekHours : 0;
        totalHours += ActiveDirectoryIntegrationRequired ? DefaultOneWeekHours : 0;
        totalHours += NumberOfInterfaces > 0 ? NumberOfInterfaces * SingleInterfaceHours : 0;
        totalHours += IsBasicChattingRequired ? DefaultTwoWeekHours : 0;
        totalHours += IsProperChatSolutionRequired ? DefaultMonthlyHours : 0;
        totalHours += this.ApplyComplexity(IsComplicated, totalHours);

        return totalHours;
    }

    private ApplyComplexity(IsComplicated: boolean, currentTotal: number) {
        return IsComplicated ? (currentTotal * ComplexityMultiplier) : 0;
    }

    private ProcessFrontend(frontEndRequst: FrontendI) {
        if (frontEndRequst == null) {
            return 0;
        }
        const {IsAdminPanelRequired, IsConsumerFrontendRequired, NumberOfInterfaces,
             IsBasicChattingRequired, IsProperChatSolutionRequired, IsComplicated } = frontEndRequst;
        let totalHours = 0;

        totalHours += IsAdminPanelRequired ? BasicAdminPanel : 0;
        totalHours +=  IsConsumerFrontendRequired ?
        (NumberOfInterfaces > 0 ?
            NumberOfInterfaces * SingleInterfaceHours : DefaultMonthlyHours) : 0;
        totalHours += IsBasicChattingRequired ? DefaultTwoWeekHours : 0;
        totalHours += IsProperChatSolutionRequired ? DefaultMonthlyHours : 0;

        totalHours += this.ApplyComplexity(IsComplicated, totalHours);
        return totalHours;
    }

    private ProcessMobile(mobileRequest: MobileI) {
        if (mobileRequest == null) {
            return 0;
        }
        const {IsLocationBasedWorkRequired, IsOfflineSupportRequired,
             IsBasicChattingRequired, IsProperChatSolutionRequired,
             NeedLowCostSolution, NumberOfInterfaces,
              IsIPhoneAppRequired, IsAndroidAppRequired, IsComplicated  } = mobileRequest;

        let totalHours = 0;
        totalHours += IsLocationBasedWorkRequired ? DefaultOneWeekHours : 0;
        totalHours += IsOfflineSupportRequired ? DefaultTwoWeekHours : 0;
        totalHours += IsBasicChattingRequired ? DefaultTwoWeekHours : 0;
        totalHours += IsProperChatSolutionRequired ? DefaultMonthlyHours : 0;

        totalHours += this.ApplyComplexity(IsComplicated, totalHours);

        if (NeedLowCostSolution
            && (IsLocationBasedWorkRequired || ! IsOfflineSupportRequired)) {
            // since client had asked for both apps, now reduce the cost
            if (IsIPhoneAppRequired && IsAndroidAppRequired) {
                totalHours += IsAndroidAppRequired ?
                (NumberOfInterfaces > 0 ?
                     NumberOfInterfaces * SingleInterfaceHours
                      : DefaultMonthlyHours) : 0;
                totalHours = totalHours * HybridMultiplier;
            } else {
                totalHours += IsAndroidAppRequired ?
                 (NumberOfInterfaces > 0 ?
                   NumberOfInterfaces * SingleInterfaceHours : DefaultMonthlyHours) : 0;
            }
            mobileRequest.SuggestedAppApproach = 'Hybrid';
        } else {
            totalHours += mobileRequest.IsAndroidAppRequired ?
                (NumberOfInterfaces > 0 ?
                    NumberOfInterfaces * SingleInterfaceHours
                      : DefaultMonthlyHours) : 0;
            totalHours += IsIPhoneAppRequired ?
                (NumberOfInterfaces > 0 ?
                    NumberOfInterfaces * SingleInterfaceHours : DefaultMonthlyHours) : 0;
            mobileRequest.SuggestedAppApproach = 'Native';
        }
        return totalHours;
    }

    private ProcessAdditionalFeatures(additionalFeaturesRequest: AdditionalFeaturesI) {
        if (additionalFeaturesRequest == null) {
            return 0;
        }
        const { IsAnyCMSRequired, OneWayThirdPartyIntegrationRequired,
         TwoWayThirdPartyIntegrationRequired } = additionalFeaturesRequest;
        let totalHours = 0;

        totalHours += IsAnyCMSRequired ? DefaultTwoWeekHours : 0;
        totalHours += OneWayThirdPartyIntegrationRequired ? DefaultTwoWeekHours : 0;
        totalHours += TwoWayThirdPartyIntegrationRequired ? DefaultMonthlyHours : 0;
        return totalHours;
    }
}
