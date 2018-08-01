import { FrontendI } from '../interfaces';

export default class Frontend implements FrontendI {
    public IsAdminPanelRequired: boolean;
    public IsConsumerFrontendRequired: boolean;
    public NumberOfInterfaces: number;
    public IsBasicChattingRequired: boolean;
    public IsProperChatSolutionRequired: boolean;
    public IsComplicated: boolean;
}
