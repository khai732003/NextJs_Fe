import { httpInvoice } from "@/lib/http";
import { TInvoiceReport } from "@/schemaValidations/invoice-report.schema";
import { TInvoiceTemplateBody } from "@/schemaValidations/invoiceTemplate.schema";
import { TOrganizationsBody } from "@/schemaValidations/organizations.schema";
import { TStore } from "@/schemaValidations/store.schema";
import { TOrganizationsBase } from "@/types/Organization";
import { TTableResponse } from "@/types/Table";

const organizationsApi = {
  getOrganizations: (sessionToken: string, params?: any) => {
    return httpInvoice.get<TTableResponse<TOrganizationsBase>>(
      "organizations",
      {
        params,
        headers: { Authorization: `Bearer ${sessionToken}` },
      }
    );
  },
  createOrganizations: (data: TOrganizationsBody) => {
    return httpInvoice.post<TOrganizationsBody>("organizations", data);
  },
  getOrganizationById: (organizationId: string, sessionToken: string) => {
    return httpInvoice.get<TTableResponse<TOrganizationsBase>>(
      `organizations/${organizationId}`,
      {
        headers: { Authorization: `Bearer ${sessionToken}` },
      }
    );
  },
  getInvoicesByOrganizationById: (
    organizationId: string,
    sessionToken: string,
    params?: any
  ) => {
    return httpInvoice.get<TTableResponse<TOrganizationsBase>>(
      `organizations/${organizationId}/invoices`,
      { params, headers: { Authorization: `Bearer ${sessionToken}` } }
    );
  },
  getTemplatesByOrganizationById: (
    organizationId: string,
    sessionToken: string,
    params?: any
  ) => {
    return httpInvoice.get<TTableResponse<TInvoiceTemplateBody>>(
      `organizations/${organizationId}/templates`,
      { params, headers: { Authorization: `Bearer ${sessionToken}` } }
    );
  },
  getStoresByOrganizationById: (
    organizationId: string,
    sessionToken: string,
    params?: any
  ) => {
    return httpInvoice.get<TTableResponse<TStore>>(
      `organizations/${organizationId}/stores`,
      { params, headers: { Authorization: `Bearer ${sessionToken}` } }
    );
  },
  getInvoiceReportByOrganizationId: (
    organizationId: string,
    sessionToken: string,
    params?: any
  ) => {
    return httpInvoice.get<TInvoiceReport>(
      `organizations/${organizationId}/invoice-report`,
      { params, headers: { Authorization: `Bearer ${sessionToken}` } }
    );
  },
};

export default organizationsApi;
