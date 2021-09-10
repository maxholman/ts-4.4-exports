import('some-lib').then(e => {
  if ('wave' in e) {
    console.log('✔️ Saw named export `wave`');
  } else {
    console.log('❌ Named export `wave` missing');
  }
});
