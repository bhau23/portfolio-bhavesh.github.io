# Custom Domain Setup Instructions for bhaveshai.in

## ✅ GitHub Pages Configuration (Complete)
The CNAME file has been added to this repository with the domain `bhaveshai.in`. This tells GitHub Pages to serve your portfolio at this custom domain.

## 📋 DNS Configuration at Hostinger (Required)

To complete the custom domain setup, you need to configure DNS records at Hostinger. Follow these steps:

### Step 1: Log in to Hostinger
1. Go to [Hostinger](https://www.hostinger.com)
2. Log in to your account
3. Navigate to the Domains section
4. Select your domain `bhaveshai.in`

### Step 2: Configure DNS Records
You need to add the following DNS records:

#### Option A: Using A Records (Recommended)
Add the following **A records** that point to GitHub's servers:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**AND** add a **CNAME record** for the www subdomain:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | bhau23.github.io | 3600 |

#### Option B: Using CNAME for Apex Domain (Alternative)
Some DNS providers support CNAME flattening or ALIAS records for apex domains. If Hostinger supports this:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME or ALIAS | @ | bhau23.github.io | 3600 |
| CNAME | www | bhau23.github.io | 3600 |

### Step 3: Wait for DNS Propagation
- DNS changes can take 24-48 hours to propagate worldwide
- Usually, changes are visible within 1-2 hours
- You can check DNS propagation at: https://dnschecker.org

### Step 4: Enable HTTPS on GitHub Pages
1. Go to your repository on GitHub: `https://github.com/bhau23/portfolio-bhavesh.github.io`
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Wait for the DNS check to complete (may take a few minutes after DNS propagation)
5. Check the box **Enforce HTTPS** (this option will be available after DNS is verified)

## 🧪 Testing Your Domain

After DNS propagation, test your domain:

1. Open a browser and visit: `http://bhaveshai.in`
2. Open a browser and visit: `https://bhaveshai.in`
3. Open a browser and visit: `https://www.bhaveshai.in`

All URLs should redirect to your portfolio website with HTTPS enabled.

## 🔧 Troubleshooting

### Domain doesn't load
- Check if DNS records are correctly configured
- Wait for DNS propagation (24-48 hours maximum)
- Clear your browser cache
- Try accessing from a different network or use incognito mode

### Certificate errors or HTTPS not working
- Wait for GitHub to issue an SSL certificate (can take a few minutes to hours)
- Make sure "Enforce HTTPS" is enabled in GitHub Pages settings
- DNS must be fully propagated before HTTPS can be enabled

### "There isn't a GitHub Pages site here" error
- Verify the CNAME file contains exactly: `bhaveshai.in`
- Check that GitHub Pages is enabled for this repository
- Verify the source branch is set correctly in repository settings

## 📚 Additional Resources

- [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Hostinger DNS Management Guide](https://support.hostinger.com/en/articles/1583227-how-to-manage-dns-records)

## 📞 Need Help?

If you encounter any issues:
1. Check the GitHub Pages settings in your repository
2. Verify DNS configuration at Hostinger
3. Use DNS checker tools to verify propagation
4. GitHub Pages support: https://support.github.com
