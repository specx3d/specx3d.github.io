Add-Type -AssemblyName System.Drawing

function Export-Crop {
  param(
    [string]$Source,
    [string]$Destination,
    [System.Drawing.Rectangle]$Crop,
    [int]$Width,
    [int]$Height
  )

  $sourceImage = [System.Drawing.Image]::FromFile($Source)
  $target = New-Object System.Drawing.Bitmap($Width, $Height)
  $graphics = [System.Drawing.Graphics]::FromImage($target)
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.DrawImage($sourceImage, (New-Object System.Drawing.Rectangle(0, 0, $Width, $Height)), $Crop, [System.Drawing.GraphicsUnit]::Pixel)
  $target.Save($Destination, [System.Drawing.Imaging.ImageFormat]::Png)
  $graphics.Dispose()
  $target.Dispose()
  $sourceImage.Dispose()
}

$root = Split-Path -Parent $PSScriptRoot
$reference = Join-Path $root 'reference-pack'
$scenes = Join-Path $root 'src\assets\images\scenes'
$brand = Join-Path $root 'public\brand'
$social = Join-Path $root 'public\social'

New-Item -ItemType Directory -Force -Path $scenes, $brand, $social | Out-Null

Export-Crop -Source (Join-Path $reference '04_x_banner_reference.png') -Destination (Join-Path $scenes 'hero-day.png') -Crop (New-Object System.Drawing.Rectangle(780, 0, 1392, 724)) -Width 1600 -Height 900
Export-Crop -Source (Join-Path $reference '02_website_dark_reference.png') -Destination (Join-Path $scenes 'hero-night.png') -Crop (New-Object System.Drawing.Rectangle(320, 88, 645, 453)) -Width 1600 -Height 900

Copy-Item -LiteralPath (Join-Path $reference '06_logo_mark_transparent.png') -Destination (Join-Path $brand 'logo-mark.png') -Force
Copy-Item -LiteralPath (Join-Path $reference '07_logo_lockup_light_transparent.png') -Destination (Join-Path $brand 'logo-lockup-light.png') -Force
Copy-Item -LiteralPath (Join-Path $reference '08_logo_lockup_dark_transparent.png') -Destination (Join-Path $brand 'logo-lockup-dark.png') -Force
Copy-Item -LiteralPath (Join-Path $reference '09_logo_mark_monochrome_transparent.png') -Destination (Join-Path $brand 'logo-mark-monochrome.png') -Force
Copy-Item -LiteralPath (Join-Path $reference '04_x_banner_reference.png') -Destination (Join-Path $social 'quiet-current-games-banner.png') -Force
