# PDF 文件大小优化指南

## 为什么 PDF 比 Word 大？

### 主要原因：

1. **格式差异**：
   - Word (.docx) 本身就是压缩格式（实际上是 ZIP 文件）
   - PDF 包含更多元数据、字体信息、结构数据
   - PDF 需要存储完整的渲染信息

2. **图片处理**：
   - Word 中的图片可能已经压缩
   - PDF 转换时可能重新编码图片
   - PDF 可能嵌入原始质量的图片

3. **字体嵌入**：
   - PDF 可能嵌入完整字体（即使只用了几个字符）
   - Word 可能使用系统字体，不嵌入

4. **元数据**：
   - PDF 包含更多元数据（创建信息、修改历史等）

## 优化方案

### 方案1：使用专业的 PDF 压缩工具（推荐）

#### macOS 命令行（如果安装了 ghostscript）：

```bash
# 安装 ghostscript（如果还没有）
brew install ghostscript

# 压缩单个 PDF
cd public/documents/news/
gs -sDEVICE=pdfwrite \
   -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/screen \
   -dNOPAUSE -dQUIET -dBATCH \
   -dDetectDuplicateImages=true \
   -dCompressFonts=true \
   -r150 \
   -sOutputFile=output.pdf input.pdf
```

**压缩级别说明：**
- `/screen` - 最低质量，最小文件（适合网页显示）
- `/ebook` - 中等质量，中等大小
- `/printer` - 高质量，较大文件
- `/prepress` - 最高质量，最大文件

#### 在线工具（推荐）：

1. **iLovePDF** - https://www.ilovepdf.com/compress-pdf
   - 选择"压缩 PDF"
   - 选择"高压缩"模式
   - 通常可以减少 50-70%

2. **SmallPDF** - https://smallpdf.com/compress-pdf
   - 拖拽上传
   - 自动压缩
   - 下载压缩后的文件

3. **PDF24** - https://tools.pdf24.org/zh/compress-pdf
   - 免费，无文件大小限制
   - 支持批量压缩

### 方案2：Word 转 PDF 时的优化设置

#### macOS Word 优化步骤：

1. **先压缩图片**：
   - 选中任意图片
   - 图片格式 → 压缩图片
   - 选择"Web (150 ppi)"
   - 勾选"应用于文档中的所有图片"

2. **另存为 PDF 时**：
   - 文件 → 另存为
   - 格式选择 PDF
   - 点击"选项..."
   - 勾选"最小文件大小（联机发布）"
   - 图像质量选择"最低"

### 方案3：使用在线转换工具（可能更小）

一些在线工具在转换时已经优化了：

1. **iLovePDF Word to PDF** - https://www.ilovepdf.com/word-to-pdf
   - 上传 Word 文件
   - 自动优化转换
   - 下载 PDF

2. **SmallPDF Word to PDF** - https://smallpdf.com/word-to-pdf
   - 支持优化选项
   - 通常比 Word 直接导出更小

## 实际案例

### 你的情况：
- Word: 70KB
- PDF（Word 导出）: 237KB（3.4倍）
- PDF（压缩后）: 178KB（2.5倍）

### 优化目标：
- 使用专业压缩工具后，通常可以压缩到：**80-120KB**
- 甚至可能比原始 Word 文件还小！

## 推荐工作流程

### 最佳实践：

1. **转换**：
   - 使用 Word 另存为 PDF（或在线工具）
   - 不追求第一次就完美

2. **压缩**：
   - 使用 iLovePDF 或 SmallPDF 压缩
   - 选择"高压缩"模式
   - 目标：压缩到 100KB 以下

3. **验证**：
   - 检查 PDF 质量是否可接受
   - 如果质量太差，使用"中等压缩"

### 快速命令（如果安装了 ghostscript）：

```bash
# 批量压缩所有 PDF
cd public/documents/news/
for file in *.pdf; do
  echo "压缩 $file..."
  gs -sDEVICE=pdfwrite \
     -dCompatibilityLevel=1.4 \
     -dPDFSETTINGS=/screen \
     -dNOPAUSE -dQUIET -dBATCH \
     -dDetectDuplicateImages=true \
     -dCompressFonts=true \
     -r150 \
     -sOutputFile="${file%.pdf}_compressed.pdf" "$file"
  mv "${file%.pdf}_compressed.pdf" "$file"
done
```

## 预期效果

| 原始文件 | Word 导出 PDF | 压缩后 PDF | 压缩率 |
|---------|--------------|-----------|--------|
| 70KB | 237KB | 80-120KB | 50-70% |

## 如果还是太大怎么办？

### 考虑方案：

1. **降低图片质量**：
   - 在 Word 中进一步压缩图片
   - 使用"Web (96 ppi)"而不是"Web (150 ppi)"

2. **移除不必要的元素**：
   - 删除隐藏的文本
   - 移除未使用的样式

3. **分页加载已优化**：
   - 即使 PDF 有 178KB，分页加载也只加载第一页（~20-30KB）
   - 用户体验仍然很好

## 结论

**178KB 对于网页来说是可以接受的**，特别是：
- ✅ 我们已经实现了分页懒加载
- ✅ 初始只加载第一页（~20-30KB）
- ✅ 用户滚动时才加载后续页面

**建议**：
1. 使用在线工具（iLovePDF）进一步压缩到 100KB 以下
2. 如果压缩后质量可接受，就使用
3. 如果质量太差，178KB 也可以接受（因为有懒加载）

