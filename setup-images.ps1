# MaxCare Image Setup Script
# This script helps you organize your product images

Write-Host "MaxCare Image Setup" -ForegroundColor Cyan
Write-Host "===================" -ForegroundColor Cyan
Write-Host ""

# Create public/img directory if it doesn't exist
$imgDir = "public\img"
if (!(Test-Path $imgDir)) {
    New-Item -ItemType Directory -Path $imgDir -Force | Out-Null
    Write-Host "✓ Created $imgDir directory" -ForegroundColor Green
} else {
    Write-Host "✓ $imgDir directory already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "Required Product Images:" -ForegroundColor Yellow
Write-Host "========================" -ForegroundColor Yellow
Write-Host ""
Write-Host "Hair Care Products (4 images needed):" -ForegroundColor White
Write-Host "  1. luxury-serum.jpg       - Luxury Argan Oil Serum"
Write-Host "  2. caviar-nursing.jpg     - Golden Caviar Nursing Care"
Write-Host "  3. shampoo-conditioner.jpg - Argan Oil Shampoo & Conditioner"
Write-Host "  4. organic-serum.jpg      - Organic Argan Oil Hair Serum"
Write-Host ""

Write-Host "Optional Images:" -ForegroundColor White
Write-Host "  - testimonial-1.jpg"
Write-Host "  - testimonial-2.jpg"
Write-Host "  - testimonial-3.jpg"
Write-Host ""

# Check if IMG folder exists
$sourceDir = "IMG"
if (Test-Path $sourceDir) {
    Write-Host "Found IMG folder! Let's copy your images..." -ForegroundColor Green
    Write-Host ""
    
    $images = Get-ChildItem -Path $sourceDir -Include *.jpg,*.jpeg,*.png,*.webp -Recurse
    
    if ($images.Count -gt 0) {
        Write-Host "Found $($images.Count) images in IMG folder:" -ForegroundColor Cyan
        foreach ($img in $images) {
            Write-Host "  - $($img.Name)"
        }
        Write-Host ""
        
        $copy = Read-Host "Copy all images to public/img? (y/n)"
        if ($copy -eq "y") {
            foreach ($img in $images) {
                Copy-Item $img.FullName -Destination $imgDir -Force
                Write-Host "✓ Copied $($img.Name)" -ForegroundColor Green
            }
            Write-Host ""
            Write-Host "✓ All images copied successfully!" -ForegroundColor Green
        }
    } else {
        Write-Host "No images found in IMG folder" -ForegroundColor Yellow
    }
} else {
    Write-Host "IMG folder not found at: $((Get-Location).Path)\IMG" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "==========" -ForegroundColor Cyan
Write-Host "1. Place your product images in public\img\"
Write-Host "2. Rename them to match the required names above"
Write-Host "3. Restart your dev server: npm run dev"
Write-Host ""
Write-Host "Image Guidelines:" -ForegroundColor Cyan
Write-Host "- Recommended size: 800x800px or larger"
Write-Host "- Format: JPG, PNG, or WebP"
Write-Host "- Keep file sizes under 500KB for best performance"
Write-Host ""
