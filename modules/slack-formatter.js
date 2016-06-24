"use strict";

let color = "#009cdb";

let formatAccounts = accounts => {

    if (accounts && accounts.length>0) {
        let attachments = [];
		color = "#009cdb";
        accounts.forEach(account => {
            let fields = [];
            fields.push({title: "Name:", value: account.get("Name"), short:true});
            fields.push({title: "Owner:", value: account.get("Account_Owner__c"), short:true});
            fields.push({title: "Account Manager:", value: account.get("AM_Text__c"), short:true});
            fields.push({title: "Solutions Engineer:", value: account.get("SE_Text__c"), short:true});
            fields.push({title: "PGM:", value: account.get("PGM_Text__c"), short:true});
            fields.push({title: "Account Type:", value: account.get("Type"), short:true});
            fields.push({title: "Region:",  value: account.get("Region__c"), short:true});
            fields.push({title: "Link", value: "https://login.salesforce.com/" + account.getId(), short:true});
            attachments.push({color: color, fields: fields});
        });
        return attachments;
    } else {
        return [{text: "No records"}];
    }

};

let formatUsers = users => {

    if (users && users.length>0) {
        let attachments = [];
		color = "#32CD32";
        users.forEach(user => {
            let fields = [];
            fields.push({title: "Name", value: user.get("Full_Name_Text__c"), short:true});
            fields.push({title: "Department", value: user.get("Department"), short:true});
            fields.push({title: "Title", value: user.get("Title"), short:true});
            fields.push({title: "Office Location", value: user.get("Office_Locations__c"), short:true});
            fields.push({title: "Email", value: user.get("Email"), short:true});
            fields.push({title: "Phone", value: user.get("MobilePhone"), short:true});
            attachments.push({color: color, fields: fields});
        });
        return attachments;
    } else {
        return [{text: "No records"}];
    }

};

let formatContacts = contacts => {

    if (contacts && contacts.length>0) {
        let attachments = [];
		color = "#dbad00";
        contacts.forEach(contact => {
            let fields = [];
            fields.push({title: "Name", value: contact.get("Name"), short:true});
            fields.push({title: "Link", value: "https://login.salesforce.com/" + contact.getId(), short:true});
            fields.push({title: "Title", value: contact.get("Title"), short:true});
			fields.push({title: "Account:", value: contact.get("Account_Name_API__c"), short:true});
			fields.push({title: "Email", value: contact.get("Email"), short:true});
            fields.push({title: "Mobile", value: contact.get("MobilePhone"), short:true});
            attachments.push({color: color, fields: fields});
        });
        return attachments;
    } else {
        return [{text: "No records"}];
    }

};

let formatContact = contact => {
	
	color = "#dbad00";

    let fields = [];
    fields.push({title: "Name", value: contact.get("FirstName") + " " + contact.get("LastName"), short:true});
    fields.push({title: "Link", value: "https://login.salesforce.com/" + contact.getId(), short:true});
    fields.push({title: "Title", value: contact.get("Title"), short:true});
    fields.push({title: "Account:", value: contact.get("Account_Name_API__c"), short:true});
	fields.push({title: "Email", value: contact.get("Email"), short:true});
	fields.push({title: "Mobile", value: contact.get("MobilePhone"), short:true});
    return [{color: color, fields: fields}];

};

let formatOpportunities = opportunities => {

    if (opportunities && opportunities.length>0) {
		color = "#db002f";
        let attachments = [];
        opportunities.forEach(opportunity => {
            let fields = [];
            fields.push({title: "Opportunity", value: opportunity.get("Name"), short:true});
            fields.push({title: "Link", value: "https://login.salesforce.com/" + opportunity.getId(), short:true});
			fields.push({title: "Account", value: opportunity.get("Opp_Account_Name_API__c"), short:true});
			fields.push({title: "Opportunity Owner", value: opportunity.get("Opportunity_Owner__c"), short:true});
            fields.push({title: "Stage", value: opportunity.get("StageName"), short:true});
            fields.push({title: "Close Date", value: opportunity.get("CloseDate"), short:true});
			fields.push({title: "Record Type", value: opportunity.get("Opportunity_Record_Type__c"), short:true});
			fields.push({title: "Opportunity Type", value: opportunity.get("Opp_Type__c"), short:true});
            attachments.push({color: color, fields: fields});
        });
        return attachments;
    } else {
        return [{text: "No records"}];
    }

};

let formatCase = _case => {

    let fields = [];
    fields.push({title: "Subject", value: _case.get("subject"), short: true});
    fields.push({title: "Link", value: 'https://login.salesforce.com/' + _case.get("id"), short: true});
    fields.push({title: "Description", value: _case.get("description"), short: false});
    return [{color: color, fields: fields}];

};

exports.formatAccounts = formatAccounts;
exports.formatUsers = formatUsers;
exports.formatContacts = formatContacts;
exports.formatContact = formatContact;
exports.formatOpportunities = formatOpportunities;
exports.formatCase = formatCase;
