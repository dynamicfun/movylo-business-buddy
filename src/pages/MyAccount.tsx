import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  UserCog,
  Lock,
  Users,
  LogOut,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  Mail,
  Shield,
  Pencil,
  Check,
  AlertTriangle,
} from "lucide-react";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { toast } from "@/hooks/use-toast";

interface SubAccount {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "viewer";
  status: "active" | "invited";
}

const roleLabels: Record<string, string> = {
  admin: "Admin",
  manager: "Manager",
  viewer: "Viewer",
};

const roleDescriptions: Record<string, string> = {
  admin: "Full access to all features and settings",
  manager: "Can manage campaigns, customers, and products",
  viewer: "Read-only access to reports and dashboards",
};

const MyAccount = () => {
  const [showCurrentPwd, setShowCurrentPwd] = useState(false);
  const [showNewPwd, setShowNewPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const [subAccounts, setSubAccounts] = useState<SubAccount[]>([
    { id: "1", name: "Maria Rossi", email: "maria@mybusiness.com", role: "manager", status: "active" },
    { id: "2", name: "", email: "luca@mybusiness.com", role: "viewer", status: "invited" },
  ]);

  const [newAccountEmail, setNewAccountEmail] = useState("");
  const [newAccountRole, setNewAccountRole] = useState<"admin" | "manager" | "viewer">("viewer");
  const [inviteDialogOpen, setInviteDialogOpen] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleChangePassword = () => {
    if (!currentPwd || !newPwd || !confirmPwd) {
      toast({ title: "Please fill in all password fields", variant: "destructive" });
      return;
    }
    if (newPwd !== confirmPwd) {
      toast({ title: "New passwords don't match", variant: "destructive" });
      return;
    }
    if (newPwd.length < 8) {
      toast({ title: "Password must be at least 8 characters", variant: "destructive" });
      return;
    }
    toast({ title: "Password updated successfully" });
    setCurrentPwd("");
    setNewPwd("");
    setConfirmPwd("");
  };

  const handleInvite = () => {
    if (!newAccountEmail) return;
    const newSub: SubAccount = {
      id: Date.now().toString(),
      name: "",
      email: newAccountEmail,
      role: newAccountRole,
      status: "invited",
    };
    setSubAccounts([...subAccounts, newSub]);
    setNewAccountEmail("");
    setNewAccountRole("viewer");
    setInviteDialogOpen(false);
    toast({ title: `Invitation sent to ${newSub.email}` });
  };

  const removeSubAccount = (id: string) => {
    setSubAccounts(subAccounts.filter((a) => a.id !== id));
    toast({ title: "Sub-account removed" });
  };

  const handleLogout = () => {
    toast({ title: "Logged out successfully" });
    setLogoutDialogOpen(false);
  };

  return (
    <InnerPageTemplate
      title="My Account"
      subtitle="Manage your account settings and team"
      icon={UserCog}
    >
      {/* Account Email (read-only info) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Mail className="h-5 w-5 text-primary" />
            Account Information
          </CardTitle>
          <CardDescription>Your login credentials</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Email address</Label>
            <div className="flex items-center gap-3">
              <Input value="owner@mybusiness.com" disabled className="bg-muted/50" />
              <Badge variant="secondary" className="shrink-0">Owner</Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              This is the primary email associated with your account.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Change Password */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Lock className="h-5 w-5 text-primary" />
            Change Password
          </CardTitle>
          <CardDescription>Keep your account secure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPwd">Current password</Label>
            <div className="relative">
              <Input
                id="currentPwd"
                type={showCurrentPwd ? "text" : "password"}
                value={currentPwd}
                onChange={(e) => setCurrentPwd(e.target.value)}
                placeholder="Enter current password"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPwd(!showCurrentPwd)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showCurrentPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="newPwd">New password</Label>
              <div className="relative">
                <Input
                  id="newPwd"
                  type={showNewPwd ? "text" : "password"}
                  value={newPwd}
                  onChange={(e) => setNewPwd(e.target.value)}
                  placeholder="At least 8 characters"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPwd(!showNewPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showNewPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPwd">Confirm new password</Label>
              <div className="relative">
                <Input
                  id="confirmPwd"
                  type={showConfirmPwd ? "text" : "password"}
                  value={confirmPwd}
                  onChange={(e) => setConfirmPwd(e.target.value)}
                  placeholder="Re-enter new password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPwd(!showConfirmPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>

          {newPwd && confirmPwd && newPwd !== confirmPwd && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <AlertTriangle className="h-3.5 w-3.5" /> Passwords don't match
            </p>
          )}

          <Button onClick={handleChangePassword} className="gap-2">
            <Check className="h-4 w-4" />
            Update Password
          </Button>
        </CardContent>
      </Card>

      {/* Sub-Accounts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-primary" />
                Sub-Accounts
              </CardTitle>
              <CardDescription>Manage team members and their permissions</CardDescription>
            </div>
            <Dialog open={inviteDialogOpen} onOpenChange={setInviteDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Invite
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Invite a Team Member</DialogTitle>
                  <DialogDescription>
                    They'll receive an email invitation to join your account.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Email address</Label>
                    <Input
                      type="email"
                      placeholder="colleague@company.com"
                      value={newAccountEmail}
                      onChange={(e) => setNewAccountEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <Select value={newAccountRole} onValueChange={(v) => setNewAccountRole(v as any)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-background border shadow-lg z-50">
                        <SelectItem value="admin">
                          <div className="flex items-center gap-2">
                            <Shield className="h-3.5 w-3.5" />
                            Admin
                          </div>
                        </SelectItem>
                        <SelectItem value="manager">
                          <div className="flex items-center gap-2">
                            <Pencil className="h-3.5 w-3.5" />
                            Manager
                          </div>
                        </SelectItem>
                        <SelectItem value="viewer">
                          <div className="flex items-center gap-2">
                            <Eye className="h-3.5 w-3.5" />
                            Viewer
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                      {roleDescriptions[newAccountRole]}
                    </p>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setInviteDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleInvite} disabled={!newAccountEmail}>
                    Send Invitation
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {subAccounts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Users className="h-10 w-10 mx-auto mb-3 opacity-40" />
              <p className="text-sm">No sub-accounts yet</p>
              <p className="text-xs mt-1">Invite team members to help manage your business</p>
            </div>
          ) : (
            <div className="space-y-3">
              {subAccounts.map((account) => (
                <div
                  key={account.id}
                  className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-semibold text-primary">
                        {(account.name || account.email).charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium truncate">
                          {account.name || account.email}
                        </p>
                        {account.status === "invited" && (
                          <Badge variant="outline" className="text-xs shrink-0">Pending</Badge>
                        )}
                      </div>
                      {account.name && (
                        <p className="text-xs text-muted-foreground truncate">{account.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge
                      variant={account.role === "admin" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {roleLabels[account.role]}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeSubAccount(account.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Logout */}
      <Card className="border-destructive/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-destructive/10">
                <LogOut className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="font-medium text-sm">Log out</p>
                <p className="text-xs text-muted-foreground">Sign out of your Movylo account</p>
              </div>
            </div>
            <Dialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground">
                  Log Out
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure you want to log out?</DialogTitle>
                  <DialogDescription>
                    You'll need to sign in again to access your account.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setLogoutDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={handleLogout}>
                    Log Out
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </InnerPageTemplate>
  );
};

export default MyAccount;
