---
layout: post
title: "Password Reset Tool - Powershell"
date: 2020-11-05 07:00:00 +0200
comments: true
---

Active Directory kullanıcıları için, basit bir şifre sıfırlama scripti oluşturdum. **Powershell GUI** kullanmak isteyen ve bu konuda nereden başlayacağını bilemeyen arkadaşlarım için detaylı bir şekilde bu konuların üzerinden geçmeye çalışacağım.

## Form

{% highlight powershell %}
Add-Type -AssemblyName System.Windows.Forms
[System.Windows.Forms.Application]::EnableVisualStyles()

$Form = New-Object system.Windows.Forms.Form
$Form.ClientSize = New-Object System.Drawing.Point(450, 570)
$Form.text = "SJ Password Reset Tool"
$Form.TopMost = $false
$Form.MaximizeBox = $false
$Form.StartPosition = "CenterScreen"
\$Form.FormBorderStyle = "FixedDialog"

$Pb_Logo = New-Object system.Windows.Forms.PictureBox
$Pb_Logo.width = 50
$Pb_Logo.height = 50
$Pb_Logo.location = New-Object System.Drawing.Point(385, 505)  
$Pb_Logo.imageLocation = "https://www.sj.k12.tr/images/stories/responsive/101/sj-150-flat.png"
$Pb_Logo.SizeMode = [System.Windows.Forms.PictureBoxSizeMode]::zoom

$Label1 = New-Object system.Windows.Forms.Label
$Label1.text = "Username"
$Label1.AutoSize = $true
$Label1.width = 25
$Label1.height = 10
$Label1.location = New-Object System.Drawing.Point(50, 40)
$Label1.Font = New-Object System.Drawing.Font('Montserrat', 12)

$Label2 = New-Object system.Windows.Forms.Label
$Label2.text = "Format : isim.soyisim"
$Label2.AutoSize = $true
$Label2.width = 25
$Label2.height = 10
$Label2.location = New-Object System.Drawing.Point(50, 100)
$Label2.Font = New-Object System.Drawing.Font('Montserrat', 12)

$UserNameTxtBox = New-Object system.Windows.Forms.TextBox
$UserNameTxtBox.multiline = $false
$UserNameTxtBox.width = 252
$UserNameTxtBox.height = 20
$UserNameTxtBox.location = New-Object System.Drawing.Point(50, 68)
\$UserNameTxtBox.Font = New-Object System.Drawing.Font('Montserrat', 12)

$Button1 = New-Object system.Windows.Forms.Button
$Button1.text = "Reset Password"
$Button1.width = 150
$Button1.height = 30
$Button1.location = New-Object System.Drawing.Point(50, 140)
$Button1.Font = New-Object System.Drawing.Font('Montserra', 12)

$Label3 = New-Object system.Windows.Forms.Label
$Label3.text = "Yusuf TEZCAN"
$Label3.AutoSize = $true
$Label3.width = 25
$Label3.height = 10
$Label3.location = New-Object System.Drawing.Point(255, 525)
$Label3.Font = New-Object System.Drawing.Font('Montserrat', 12)

$ResultText = New-Object system.Windows.Forms.TextBox
$ResultText.AutoSize = $true
$ResultText.ReadOnly = $true
$ResultText.width = 350
$ResultText.height = 300
$ResultText.location = New-Object System.Drawing.Point(50, 200)
$ResultText.Font = New-Object System.Drawing.Font('Montserrat', 12)
$ResultText.multiline = \$true

$ErrorText = New-Object system.Windows.Forms.Label
$ErrorText.AutoSize = $true
$ErrorText.width = 25
$ErrorText.height = 10
$ErrorText.location = New-Object System.Drawing.Point(50, 93)
$ErrorText.Font = New-Object System.Drawing.Font('Montserrat ', 12)
$ErrorText.ForeColor = [System.Drawing.ColorTranslator]::FromHtml("#d0021b")

$Form.controls.AddRange(@($Label1, $UserNameTxtBox, $Button1, $ResultText, $ErrorText, $Pb_Logo, $Label2, \$Label3 ))

\$Button1.Add_Click( { reset-password })
{% endhighlight %}
