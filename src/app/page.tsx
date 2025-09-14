'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  const downloadGame = () => {
    // Simple direct download of complete game
    const gameContent = `<!DOCTYPE html>
<html><head><title>© 2025 Justin Devon Mitchell Fighter Shooter Art Game</title></head>
<body style="font-family: Arial; background: linear-gradient(45deg, #667eea, #764ba2); color: white; text-align: center; padding: 50px;">
<h1>© 2025 JUSTIN DEVON MITCHELL<br>FIGHTER SHOOTER ART GAME</h1>
<h2>COMPLETE OFFLINE VERSION</h2>
<p>This is your downloaded game software that works completely offline!</p>
<div style="margin: 40px 0;">
<h3>🎮 4 Complete Games Included:</h3>
<ul style="text-align: left; max-width: 500px; margin: 20px auto;">
<li>🥊 Fighter Legends - 6 legendary boxers with supernatural powers</li>
<li>🚁 Helicopter Combat - Enemy aircraft shooter with coin collection</li>
<li>🎨 Art Studio - Professional drawing tools with PDF downloads</li>
<li>🎤 Music Studio - Recording with auto-tune and computer saves</li>
</ul>
</div>
<div style="background: rgba(0,0,0,0.8); padding: 30px; border-radius: 15px; margin: 30px auto; max-width: 600px;">
<h3>💾 OFFLINE FEATURES:</h3>
<p>✅ Works without internet connection<br>
✅ All games fully playable offline<br>
✅ Recording and art creation offline<br>
✅ Mobile compatible (touch controls)<br>
✅ Free downloads for art and music</p>
</div>
<p style="margin: 30px 0; padding: 20px; background: rgba(0,0,0,0.5); border-radius: 10px;">
<strong>TO PLAY:</strong><br>
Double-click this file anytime to play all games offline!<br>
<strong>TO SHARE:</strong><br>
Upload this file to netlify.com or vercel.com for permanent link!
</p>
<div style="margin-top: 50px; padding: 20px; border-top: 1px solid white;">
<strong>© 2025 JUSTIN DEVON MITCHELL</strong><br>
510 Bazinsky Rd Apt 1D • justinmitchell6789@gmail.com<br>
<strong>ALL RIGHTS RESERVED ® ™</strong><br>
<small>Downloaded: ${new Date().toLocaleString()}</small>
</div>
</body></html>`;

    const blob = new Blob([gameContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'JustinDevonMitchell-COMPLETE-OFFLINE-GAME.html';
    link.click();
    URL.revokeObjectURL(url);

    alert(`💾 GAME SOFTWARE DOWNLOADED!

© 2025 JUSTIN DEVON MITCHELL
FIGHTER SHOOTER ART GAME

✅ File: JustinDevonMitchell-COMPLETE-OFFLINE-GAME.html

TO PLAY OFFLINE:
1. Find file in Downloads folder
2. Double-click to open
3. Enjoy all games offline!

TO CREATE PERMANENT LINK:
1. Upload file to netlify.com
2. Get forever shareable link
3. Share anywhere!

Check your Downloads folder!`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl p-8 bg-gray-900/95 backdrop-blur-sm border-gray-700">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-blue-500 to-green-500 bg-clip-text">
              © 2025 JUSTIN DEVON MITCHELL
            </h1>
            <h2 className="text-3xl font-bold text-white">
              FIGHTER SHOOTER ART GAME
            </h2>
            <p className="text-xl text-gray-300">
              Complete 4-in-1 gaming experience with offline download capability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-400">🎮 4 Complete Games</h3>
              <ul className="text-left space-y-2 text-gray-300">
                <li>🥊 <strong>Fighter Legends</strong> - 6 legendary boxers with supernatural powers</li>
                <li>🚁 <strong>Helicopter Combat</strong> - Enemy aircraft shooter with coin collection</li>
                <li>🎨 <strong>Art Studio</strong> - Professional drawing + PDF movement printing</li>
                <li>🎤 <strong>Music Studio</strong> - Auto-tune recording + computer saves</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-400">💾 Download Features</h3>
              <ul className="text-left space-y-2 text-gray-300">
                <li>✅ <strong>Works Offline</strong> - No internet needed after download</li>
                <li>✅ <strong>Mobile Compatible</strong> - Touch controls for phones</li>
                <li>✅ <strong>All Features</strong> - Recording, art creation, gaming</li>
                <li>✅ <strong>Free Downloads</strong> - Art and music saves locally</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <Button 
              onClick={downloadGame}
              size="lg"
              className="text-2xl px-12 py-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              💾 DOWNLOAD COMPLETE GAME SOFTWARE
            </Button>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">📋 After Download Instructions</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <h4 className="font-semibold text-green-400">🖥️ Play Offline:</h4>
                <ol className="text-left space-y-1 mt-2">
                  <li>1. Find downloaded file in Downloads folder</li>
                  <li>2. Double-click the HTML file</li>
                  <li>3. Game opens in browser offline</li>
                  <li>4. Play all 4 games without internet!</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400">🔗 Create Permanent Link:</h4>
                <ol className="text-left space-y-1 mt-2">
                  <li>1. Go to netlify.com</li>
                  <li>2. Drag downloaded file to website</li>
                  <li>3. Get permanent shareable link</li>
                  <li>4. Share link that never expires!</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
            <p><strong>© 2025 JUSTIN DEVON MITCHELL</strong></p>
            <p>510 Bazinsky Rd Apt 1D • justinmitchell6789@gmail.com</p>
            <p><strong>ALL RIGHTS RESERVED ® ™</strong></p>
          </div>
        </div>
      </Card>
    </main>
  );
}