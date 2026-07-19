export const ALLOWED_NEXT=new Set(["create-report","home"]);
export type RegisterInput={email:string;password:string;confirmPassword:string;acceptedTerms:boolean};
export type LoginInput={email:string;password:string};
export type FieldErrors=Partial<Record<"email"|"password"|"confirmPassword"|"acceptedTerms"|"form",string>>;
export const authAdapter={async register(_input:RegisterInput){await new Promise(r=>setTimeout(r,400));return{status:"PROTOTYPE_ONLY" as const,accountCreated:false,sessionCreated:false}},async login(_input:LoginInput){await new Promise(r=>setTimeout(r,400));return{status:"PROTOTYPE_ONLY" as const,accountCreated:false,sessionCreated:false}}};
const EMAIL_RE=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function validateRegister(input:RegisterInput):FieldErrors{const e:FieldErrors={};if(!input.email.trim())e.email="Email address is required.";else if(!EMAIL_RE.test(input.email.trim()))e.email="Please enter a plausible email address.";if(!input.password)e.password="Password is required.";if(!input.confirmPassword)e.confirmPassword="Please confirm your password.";else if(input.password!==input.confirmPassword)e.confirmPassword="Passwords do not match.";if(!input.acceptedTerms)e.acceptedTerms="You must acknowledge the Terms and Privacy Principles.";return e}
export function validateLogin(input:LoginInput):FieldErrors{const e:FieldErrors={};if(!input.email.trim())e.email="Email address is required.";else if(!EMAIL_RE.test(input.email.trim()))e.email="Please enter a plausible email address.";if(!input.password)e.password="Password is required.";return e}
export function parseSafeNext(raw:string|null|undefined){const v=(raw||"").trim().toLowerCase();return ALLOWED_NEXT.has(v)?v:"home"}
