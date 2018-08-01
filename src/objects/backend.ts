import { BackendI } from '../interfaces';

export default class Backend implements BackendI {
    public RequireConfigurableWorkflow: boolean;
    public  WorkflowLogicRequired: boolean;
    public   ActiveDirectoryIntegrationRequired: boolean;
    public NumberOfInterfaces: number;
    public IsBasicChattingRequired: boolean;
    public IsProperChatSolutionRequired: boolean;
    public IsComplicated: boolean;
}
