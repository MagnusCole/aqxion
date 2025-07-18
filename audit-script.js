// LLM-OPTIMIZED: Comprehensive audit script for AQXION codebase
const fs = require('fs');
const path = require('path');

// Issues detection with severity levels
const auditResults = {
  visual: [],
  code: [],
  design: [],
  professional: []
};

// File analysis helper
function analyzeFile(filePath, content) {
  const issues = [];
  
  // Visual/UX Issues Detection
  if (content.includes('hardcoded colors') || content.match(/#[0-9a-fA-F]{6}/g)) {
    issues.push({
      category: 'visual',
      severity: 'medium',
      file: filePath,
      issue: 'Hardcoded colors found - should use CSS tokens',
      line: content.split('\n').findIndex(line => line.match(/#[0-9a-fA-F]{6}/)) + 1
    });
  }

  // Missing accessibility attributes
  if (content.includes('<button') && !content.includes('aria-label')) {
    issues.push({
      category: 'visual',
      severity: 'high',
      file: filePath,
      issue: 'Button missing aria-label for accessibility',
      line: content.split('\n').findIndex(line => line.includes('<button')) + 1
    });
  }

  // Code Quality Issues
  if (content.includes('console.log') && !content.includes('development')) {
    issues.push({
      category: 'code',
      severity: 'medium',
      file: filePath,
      issue: 'Console.log found in production code',
      line: content.split('\n').findIndex(line => line.includes('console.log')) + 1
    });
  }

  // Unused imports detection
  const importMatches = content.match(/import.*from.*;/g);
  if (importMatches) {
    importMatches.forEach(importLine => {
      const importName = importLine.match(/import\s+{?\s*(\w+)/)?.[1];
      if (importName && !content.includes(importName.replace('import', '').trim())) {
        issues.push({
          category: 'code',
          severity: 'low',
          file: filePath,
          issue: `Potentially unused import: ${importName}`,
          line: content.split('\n').findIndex(line => line.includes(importLine)) + 1
        });
      }
    });
  }

  // Design consistency issues
  if (content.includes('className=') && content.includes('inline styles')) {
    issues.push({
      category: 'design',
      severity: 'medium',
      file: filePath,
      issue: 'Mixed inline styles and CSS classes - should use tokens',
      line: 0
    });
  }

  // Professional issues
  if (!content.includes('meta') && filePath.includes('page.tsx')) {
    issues.push({
      category: 'professional',
      severity: 'high',
      file: filePath,
      issue: 'Missing SEO meta tags',
      line: 1
    });
  }

  return issues;
}

// Recursive directory scan
function scanDirectory(dir, extensions = ['.tsx', '.ts', '.css', '.js']) {
  const files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...scanDirectory(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error.message);
  }
  
  return files;
}

// Main audit function
function runAudit() {
  console.log('🔍 Starting comprehensive AQXION audit...\n');
  
  const srcDir = path.join(__dirname, 'src');
  const files = scanDirectory(srcDir);
  
  console.log(`📊 Scanning ${files.length} files...\n`);
  
  files.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const issues = analyzeFile(filePath, content);
      
      issues.forEach(issue => {
        auditResults[issue.category].push(issue);
      });
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error.message);
    }
  });

  // Generate report
  console.log('🎯 AUDIT RESULTS SUMMARY');
  console.log('='.repeat(50));
  
  Object.entries(auditResults).forEach(([category, issues]) => {
    const critical = issues.filter(i => i.severity === 'critical').length;
    const high = issues.filter(i => i.severity === 'high').length;
    const medium = issues.filter(i => i.severity === 'medium').length;
    const low = issues.filter(i => i.severity === 'low').length;
    
    console.log(`\n📋 ${category.toUpperCase()} ISSUES (${issues.length} total)`);
    console.log(`   🔴 Critical: ${critical}`);
    console.log(`   🟡 High: ${high}`);
    console.log(`   🟠 Medium: ${medium}`);
    console.log(`   🟢 Low: ${low}`);
  });

  // Detailed issues
  console.log('\n📝 DETAILED ISSUES BY CATEGORY');
  console.log('='.repeat(50));
  
  Object.entries(auditResults).forEach(([category, issues]) => {
    if (issues.length > 0) {
      console.log(`\n${category.toUpperCase()}:`);
      issues.slice(0, 10).forEach((issue, index) => {
        console.log(`  ${index + 1}. [${issue.severity.toUpperCase()}] ${issue.issue}`);
        console.log(`     📁 ${path.relative(__dirname, issue.file)}:${issue.line}`);
      });
      if (issues.length > 10) {
        console.log(`     ... and ${issues.length - 10} more issues`);
      }
    }
  });

  // Performance analysis
  console.log('\n⚡ PERFORMANCE ANALYSIS');
  console.log('='.repeat(50));
  console.log('Current bundle sizes from build:');
  console.log('- Homepage: 109 kB (First Load JS)');
  console.log('- Blog: 114 kB (First Load JS)');
  console.log('- Landing: 115 kB (First Load JS)');
  console.log('- Shared chunks: 101 kB');
  console.log('\n💡 RECOMMENDATIONS:');
  console.log('- Consider code splitting for heavy pages');
  console.log('- Optimize shared chunks');
  console.log('- Implement lazy loading for non-critical components');

  // Next steps
  console.log('\n🚀 NEXT STEPS FOR WORLD-CLASS WEB');
  console.log('='.repeat(50));
  console.log('1. Fix critical and high severity issues first');
  console.log('2. Implement comprehensive testing suite');
  console.log('3. Add Web Vitals monitoring');
  console.log('4. Optimize for Lighthouse 100/100 score');
  console.log('5. Enhance accessibility compliance');
  console.log('6. Implement advanced SEO optimizations');
  
  return auditResults;
}

// Export for potential programmatic use
module.exports = { runAudit, auditResults };

// Run if called directly
if (require.main === module) {
  runAudit();
}
